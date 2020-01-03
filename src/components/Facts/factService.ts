
export type FactProps = {
  id: number,
  fact: string
}

export const FACTS: FactProps[] = [
    {
      id: 0, fact: "Finland consumes the most coffee in the world."
    },
    {
      id: 1, fact: "Despite the fact that caffeine is a mild diuretic, you do not lose more fluid than you take in by drinking coffee, so it cannot dehydrate you."
    },
    {
      id: 2, fact: "Coffee beans are only called beans because of the resemblance - they’re actually berries."
    },
    {
      id: 3, fact: "Before coffee became widely available, the popular breakfast drink was beer."
    },
    {
      id: 4, fact: "Globally people consume about 2.25 billion cups of coffee every day."
    },
    {
      id: 5, fact: "The cappuccino was named after Capuchin friars because its color resembles the Capuchin robe."
    },
    {
      id: 6, fact: "The majority of coffee is produced in Brazil. It produces 40% of the world's coffee."
    }
  ]
  
  export const chooseFact = () => FACTS[Math.floor(Math.random() * FACTS.length)]
  