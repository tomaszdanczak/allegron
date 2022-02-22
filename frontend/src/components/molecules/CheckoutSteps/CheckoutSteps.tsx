let steps = [
  { id: 'Step 1', name: 'Sign In', status: 'upcoming' },
  { id: 'Step 2', name: 'Shipping', status: 'upcoming' },
  { id: 'Step 3', name: 'Payment', status: 'upcoming' },
  { id: 'Step 4', name: 'Place Order', status: 'upcoming' },
]

interface IProps {
  currentStep: 1 | 2 | 3 | 4
}

export default function CheckoutSteps({ currentStep }: IProps) {
  steps = steps.map((step, index) => {
    if (index < currentStep - 1) return { ...step, status: 'complete' }
    if (index === currentStep - 1) return { ...step, status: 'current' }
    return { ...step, status: 'upcomming' }
  })

  return (
    <nav aria-label="Progress" className="mx-auto max-w-2xl px-4 pt-16 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <ol className="space-y-4 md:flex md:space-y-0 md:space-x-8">
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            {step.status === 'complete' ? (
              <div className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
                <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600 group-hover:text-indigo-800">{step.id}</span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : step.status === 'current' ? (
              <div className="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
                <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{step.id}</span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            ) : (
              <div className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 group-hover:text-gray-700">{step.id}</span>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
