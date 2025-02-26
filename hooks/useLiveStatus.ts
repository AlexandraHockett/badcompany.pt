import { useState, useEffect } from "react";

export function useLiveStatus() {
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        // Verificar cache local antes de chamar a API
        const cachedLiveStatus = localStorage.getItem("liveStatus");
        const cachedTimestamp = localStorage.getItem("liveStatusTimestamp");

        if (cachedLiveStatus && cachedTimestamp) {
          const timestamp = parseInt(cachedTimestamp);
          const now = Date.now();
          // Verificar se o cache tem menos de 5 minutos (para o cliente)
          if (now - timestamp < 300000) {
            setIsLive(JSON.parse(cachedLiveStatus));
            setLoading(false);
            return;
          }
        }

        const response = await fetch("/api/live-status");
        if (!response.ok) {
          throw new Error("Erro ao verificar status do live");
        }

        const data = await response.json();

        console.log("Resposta da API:", data); // <-- Adicione isso

        // Guardar no cache local do cliente
        localStorage.setItem("liveStatus", JSON.stringify(data.isLive));
        localStorage.setItem("liveStatusTimestamp", Date.now().toString());

        setIsLive(data.isLive);
      } catch (error) {
        console.error("Erro ao verificar live:", error);
        setError(error instanceof Error ? error.message : "Erro desconhecido.");
        setIsLive(false);
      } finally {
        setLoading(false);
      }
    };

    checkLiveStatus();

    // Atualiza a cada 5 minutos no cliente
    const interval = setInterval(checkLiveStatus, 300000);

    return () => clearInterval(interval);
  }, []);

  return { isLive, loading, error };
}
