$('#zipcode').on('blur', function() {
    const zipcode = $('#zipcode').val()

    $.ajax({
        url: 'https://viacep.com.br/ws/' + zipcode + '/json',
        success: function(result) {
            $('#street').val(result.logradouro)
            $('#neighborhood').val(result.bairro + ' ' + result.complemento)
            $('#city').val(result.localidade)
            $('#state').val(result.uf)
        }
    })
})