interface FeatureCardProps {
  icon: string
  title: string
  desc: string
}

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="text-4xl">{icon}</div>
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  )
}
