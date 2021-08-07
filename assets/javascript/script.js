// ler o cardápio e para cada indice ler o item
// a cada item pegar as informaçoes e criar um card com as informações

let sectionTradicionais = document.querySelector(".tradicionais__countainer")
let sectionArtesanais = document.querySelector(".artesanais__countainer")
let sectionCombos = document.querySelector(".combos__countainer")

//variavel de controle da rireção do card
let left = true
let inverso = false

// cria o card do item 
const criaCard = (tipo, titulo, valor, descricao, imagem) => {
    let card = document.createElement("div")
    let cardContent = document.createElement("div")
    let cardImage = document.createElement("div")
    let image = document.createElement("img")

    let title = document.createElement("h3")
    title.innerText = titulo

    let text = document.createElement("p")
    let price = document.createElement("strong")
    price.innerText = valor
    text.appendChild(price)
    let description = document.createElement("p")
    description.innerText = descricao

    if (left) {
        card.classList.add(`${tipo}__cardLeft`, "cardLeft")
        cardContent.classList.add(`${tipo}__cardContentLeft`, "cardContentLeft")
        cardImage.classList.add(`${tipo}__cardImageLeft`, "cardImageLeft", "hidden")

        left = false
    } else {
        card.classList.add(`${tipo}__cardRight`, "cardRight")
        cardContent.classList.add(`${tipo}__cardContentRight`, "cardContentRight")
        cardImage.classList.add(`${tipo}__cardImageRight`, "cardImageRight", "hidden")
        left = true
    }

    if (imagem !== "") {
        image.src = imagem
        image.alt = "Imagem ilustrativa do lanche"
        cardImage.classList.remove("hidden")
        
    }
    cardImage.appendChild(image)
    card.appendChild(cardContent)
    cardContent.appendChild(title)
    cardContent.appendChild(text)
    cardContent.appendChild(description)
    card.appendChild(cardImage)
    return card
}

const criaCombo = (titulo, valor, descricao, opcoes, obs) => {
    let card = document.createElement("div")
    let cardTitle = document.createElement("div")
    let cardContent = document.createElement("div")

    let title = document.createElement("h3")
    title.innerText = titulo

    let text = document.createElement("p")
    let price = document.createElement("strong")
    price.innerText = valor
    text.appendChild(price)

    let description = document.createElement("p")
    let descriptionSpan = document.createElement("span")
    descriptionSpan.innerText = descricao
    description.appendChild(descriptionSpan)

    let options = document.createElement("p")
    options.innerText = opcoes

    let observacoes = document.createElement("p")
    observacoes.innerText = obs

    if (inverso) {
        card.classList.add("combos__cardInverso")
        cardTitle.classList.add("combos__cardTitleInverso")
        cardContent.classList.add("combos__cardContentInverso")

        inverso = false
    } else {
        card.classList.add("combos__card")
        cardTitle.classList.add("combos__cardTitle")
        cardContent.classList.add("combos__cardContent")

        inverso = true
    }
    
    cardTitle.appendChild(title)
    cardTitle.appendChild(text)

    cardContent.appendChild(description)
    cardContent.appendChild(options)
    cardContent.appendChild(observacoes)
    
    card.appendChild(cardTitle)
    card.appendChild(cardContent)
    
    return card

}

// lê o cardápio iterando sobre ele
const lerCardapio = () => {
    let tipo = ""
    let nome = ""
    let valor = ""
    let descricao = ""
    let imagem = ""

    cardapio.forEach((item, index) => {
        tipo = (item[0] === "t") ? "tradicionais" : "artesanais"
        nome = item[1]
        valor = `R$ ${item[2].toFixed(2)}`
        descricao = item[3]
        imagem = item[4]
        
        let card = criaCard(tipo, nome, valor, descricao, imagem)
        
        if (tipo === "tradicionais") {
            sectionTradicionais.appendChild(card)
        }
        if (tipo === "artesanais") {
            sectionArtesanais.appendChild(card)
        }
 
    })

}

// le os combos iterando sobre eles
const lerCombos = () => {
    let nome = ""
    let valor = ""
    let descricao = ""
    let opcoes = ""
    let obs = ""

    combos.forEach((item, index) => {
        nome = item[1]
        valor = `R$ ${item[2].toFixed(2)}`
        descricao = item[3]
        opcoes = item[4]
        obs = item[5]

        let card = criaCombo(nome, valor, descricao, opcoes, obs)
        sectionCombos.appendChild(card)
    })
}

lerCardapio()
lerCombos()