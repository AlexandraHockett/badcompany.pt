export function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center ">
      <p>
        &copy; {new Date().getFullYear()} BadCompany. Todos os direitos
        reservados.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://www.instagram.com/badcompany_oficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/badcompany"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.youtube.com/channel/badcompany"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
      </div>
      <p className="mt-2">
        Contato: <a href="mailto:geral@badcompany.pt">geral@badcompany.pt</a>
      </p>
    </footer>
  );
}
