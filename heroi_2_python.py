def ranqueada(vitoria, derrota):
    rank = vitoria - derrota
    return rank


def nivel():
    if ranqueada(quantidadeVitoria, quantidadeDerrota) <= 10:
        return "FERRO"
    elif ranqueada(quantidadeVitoria, quantidadeDerrota) <= 20:
        return "BRONZE"
    elif ranqueada(quantidadeVitoria, quantidadeDerrota) <= 50:
        return "PRATA"
    elif ranqueada(quantidadeVitoria, quantidadeDerrota) <= 80:
        return "OURO"
    elif ranqueada(quantidadeVitoria, quantidadeDerrota) <= 90:
        return "DIAMANTE"
    elif ranqueada(quantidadeVitoria, quantidadeDerrota) <= 100:
        return "LENDÁRIO"
    elif ranqueada(quantidadeVitoria, quantidadeDerrota) >= 101:
        return "IMORTAL"
    else:
        print("ERRO INESPERADO")


quantidadeVitoria = //"Digite a quantidade de vitoria "
quantidadeDerrota = //"Digite a quantidade de derrota "

     
print(f"""
O Herói tem 
{quantidadeVitoria} de vitorias
{quantidadeDerrota} de derrotas

tem saldo de vitorias de {ranqueada(quantidadeVitoria, quantidadeDerrota)} 
esta no nivel {nivel()}!!! 
""")
