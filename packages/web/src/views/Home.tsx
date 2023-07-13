import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col w-full  lg:w-1/2 xl:w-1/3 ">
        <h1 className="m-8 text-2xl font-semibold border-b border-gray-300 py-4">My  Wallet</h1>
        {[0, 1, 2, 3, 4, 5].map(key => {
          return (
            <div key={key} className="flex flex-wrap -m-2">
              <div className="m-4  w-full ">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg hover:bg-blue-200">
                  <img
                    alt="team"
                    className="w-8 h-8 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  ></img>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      name <span className="text-gray-500">2/3</span>
                    </h2>
                    <p className="text-gray-500  w-80 md:w-full text-ellipsis overflow-hidden">0x12CF5132064Ee45AcD4843E8C9D7Ae5e3852Aaab</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex-1  bg-gradient-to-r from-cyan-500 to-blue-500">
   
      <article className="prose prose-slate">
  <h1>Garlic bread with cheese: What the science tells us</h1>

  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  
</article>
      </div>
    </div>
  )
}

export default Home
