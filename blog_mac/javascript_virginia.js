// laskee hinnan kappalemäärälle. Palauttaa esim. 10.55
function calculatePrice(kpl) {
    let hinta = 0
        
    if (kpl > 0 && kpl < 4) hinta = 5.90 * kpl
    if (kpl >= 4 && kpl < 10) hinta = 4.90 * kpl
    if (kpl >= 10 && kpl < 20) hinta = 3.90 * kpl
    if (kpl >= 20 && kpl < 25) hinta = 2.90 * kpl
        
    return hinta.toFixed(2)
}



// tekee merkkijonon tyyliin "10 kpl, hinta 23.10€"
function calculatePriceText(kpl) {  
    const hinta = calculatePrice(kpl)
    const teksti = kpl + " kpl, hinta " + hinta + "€"
    return teksti
}


// tätä kutsutaan kun sivu on ladattu
function asetaTekstitOptionsListaan() {
    let elt = document.getElementById("kpl-1")
    elt.innerText = calculatePriceText(1)
    elt.setAttribute("price", calculatePrice(1))  
    
      
    elt = document.getElementById("kpl-2")
    elt.innerText = calculatePriceText(2) 
    elt.setAttribute("price", calculatePrice(2))  
      
    elt = document.getElementById("kpl-3")
    elt.innerText = calculatePriceText(3)
    elt.setAttribute("price", calculatePrice(3)) 
    
    elt = document.getElementById("kpl-4")
    elt.innerText = calculatePriceText(4)
    elt.setAttribute("price", calculatePrice(4)) 
      
    elt = document.getElementById("kpl-10")
    elt.innerText = calculatePriceText(10)
    elt.setAttribute("price", calculatePrice(10)) 
    
    elt = document.getElementById("kpl-20")
    elt.innerText = calculatePriceText(20)
    elt.setAttribute("price", calculatePrice(20))
}

// tätä funktiota kutsutaan kun käyttäjä valitsee kappalemäärän select-menusta      
function valintaMuuttui() {

      console.log('käyttäjä valitsi kappalemäärän')

      let elt = document.getElementById("hintalista_arvo")
      let indeksi = elt.selectedIndex
    
      console.log('kappalemäärän sijainti hintalistalla ', indeksi)
      console.log('elt.options ', elt.options)
      //Haetaan options taulukosta (hinnasto) indeksi niin mones elementti kuin indeksin arvo on
      let valinta = elt.options[indeksi];
      console.log('valinta', valinta)
      let hinta = valinta.getAttribute("price");
      console.log('hinta', hinta)
    
      sessionStorage.setItem('kappalemäärä', valinta.value);  
      sessionStorage.setItem('hinta', hinta);
}

