function getFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz"
  if (number % 3 === 0) return "Fizz"
  if (number % 5 === 0) return "Buzz"
  return number.toString()
}

function FizzBuzz() {
  const fizzBuzzArray = Array.from({ length: 100 }, (_, i) => getFizzBuzz(i + 1))

  return (
    <div className="fizzbuzz-container">
      <h2>FizzBuzz</h2>
      <div className="fizzbuzz-box">
        {fizzBuzzArray.map((item, index) => (
          <div key={index} className={`fizzbuzz-item ${item.toLowerCase()}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FizzBuzz
