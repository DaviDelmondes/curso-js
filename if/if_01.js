let statuUsuario= ''// pode ser ativo, inativo, banido, ou pendente

if (statuUsuario === 'ativo'){
    console.log('Bem-vindo de volta! acesso Permitido')
} else{
    if (statuUsuario === 'inativo'){
        console.log('sua conta esta inativa, entre contato com o suporte')
    }else{
        if (statuUsuario === 'banido'){
            console.log('acesso negado! sua conta foi banida por violar as politicas')
        }else{
            if(statuUsuario ==='pendente'){
                console.log('sua conta nao foi verficada por favor verifica o email')
            }else{
                console.log('status do usuario desconhecido, por favor tente novamente')
            }
        }
    }
}
console.log('fim')