function alteraStatusEmCartaz(id_codigo) {

  for (var i = 0; i < catalogo.length; i++) {

    if (catalogo[i].codigo === id_codigo) {

      if (catalogo[i].emCartaz === false) {

        catalogo[i].emCartaz = true

      } else {

        catalogo[i].emCartaz = false

      }

      return catalogo[i]
    }


  }

}