document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submit-btn").addEventListener("click", function() {
       
        fetch("https://cataas.com/cat")
            .then(response => response.blob())
            .then(blob => {
              
                const imgUrl = URL.createObjectURL(blob);
                
                
                const imgElement = document.getElementById("cat-image");

            
                imgElement.src = imgUrl;
            })
            .catch(error => console.error('Erro ao obter felino:', error));

        
        this.style.display = "none";
    });
});
