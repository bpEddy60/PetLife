function sepeteEkle(urunAdi) {
    var bildirim = document.createElement('div');
    bildirim.className = 'position-fixed bottom-0 end-0 m-4 p-3 bg-success text-white rounded shadow-lg';
    bildirim.style.zIndex = '9999';
    bildirim.style.transition = 'opacity 0.5s';
    bildirim.innerHTML = '🛒 <strong>' + urunAdi + '</strong> başarıyla sepete eklendi!';
    
    document.body.appendChild(bildirim);
    
    setTimeout(function() {
        bildirim.style.opacity = '0';
        setTimeout(function() { 
            bildirim.remove(); 
        }, 500);
    }, 3000);
}