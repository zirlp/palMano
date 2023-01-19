(async() => {
    const {value: estado} = await Swal.fire({
        title: "Bienvenido",
        text: "Selecciona tu Pais",
        
        icon: "question",
       
        padding: "1rem",
       
        backdrop: "true",
        
         position:"center",
         allowOutsideClick: "true",
         allowEscapeKey: "false",
         allowEnterKey:"false",
         stopKeydownPropagation: "false",
    
         input: "select",
         inputPlaceholder:"Estado",
        
        inputOptions:{
            Jalisco: "Jalisco",
            Sonora: "Sonora",
            CDMX: "CDMX",
            Guerrero: "Guerrero",
            Durango: "Durango",
            Sinaloa: "Sinaloa",
        }
        
      
    });

    if (estado) {
        Swal.fire({
            title: `Seleccionaste ${estado}`, 
        });
    }
})()




