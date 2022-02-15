interface IProps {
  details: string[]
}

export default function ProductDetails({ details }: IProps) {
  return (
    <div className="mt-8 border-t border-gray-200 pt-8">
      <h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

      <div className="prose prose-sm mt-4 text-gray-500">
        <ul>
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
