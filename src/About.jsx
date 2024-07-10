const people = [
  {
    name: 'ThieneshKumar',
    role: 'Founder',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww',
  },
  // More people...
]

export default function About() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our Founder</h2>
          <p className="mt-6 text-lg leading-8 text-white">
          With a passion for empowering individuals in the world of forex trading, 
          Thienesh has dedicated his career to providing expert 
          guidance and education. Through his innovative approach, Thienesh 
          has transformed the landscape of forex education, making complex concepts accessible and 
          actionable for traders of all levels. He believes in a hands-on learning experience 
          that equips his students with the knowledge and skills to thrive in the global financial markets.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
