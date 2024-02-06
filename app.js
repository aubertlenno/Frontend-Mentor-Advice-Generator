const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()

    document.querySelector(".advice-id").innerHTML = `Advice #${data.slip.id}`
    document.querySelector(".advice-text").innerHTML = `"${data.slip.advice}"`
}

fetchAdvice()