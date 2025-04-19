export default function DownloadSection() {
  const platforms = [
    { name: 'Windows', file: 'AIStockSystem.exe' },
    { name: 'macOS',   file: 'AIStockSystem.dmg' },
    { name: 'Linux',   file: 'AIStockSystem.AppImage' },
    { name: 'iOS',     file: 'AIStockSystem.ipa' },
    { name: 'Android', file: 'AIStockSystem.apk' },
  ]

  return (
    <section id="download" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">跨平台下載</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          支援 Windows、macOS、Linux、iOS、Android
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {platforms.map((p) => (
            <a
              key={p.name}
              href={`/downloads/${p.file}`}
              download
              className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition flex items-center justify-center"
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
