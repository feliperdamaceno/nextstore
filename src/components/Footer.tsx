export default function Footer() {
  return (
    <footer className="text-sm text-center text-zinc-500 mt-auto mb-4 py-4 border-t border-zinc-200">
      <p className="mx-2">
        NextStore {new Date().getFullYear()}{' '}
        <a
          href="https://github.com/feliperdamaceno"
          target="_blank"
          rel="author"
        >
          feliperdamaceno
        </a>
      </p>
    </footer>
  )
}
