#!/usr/bin/env python
# coding: utf-8

# In[1]:


class Urna:
    #Inicializa as variáveis da Classe
    def __init__(self, total_eleitores, votos_validos, votos_brancos, votos_nulos):
        self.total_eleitores = total_eleitores
        self.votos_validos = votos_validos
        self.votos_brancos = votos_brancos
        self.votos_nulos = votos_nulos

    #Calcula o percentual de votos válidos em relação ao total de eleitores
    def percentualValidos(self):
        percentualValidos = self.votos_validos / self.total_eleitores
        return percentualValidos

    #Calcula o percentual de votos brancos em relação ao total de eleitores
    def percentualBrancos(self):
        percentualBrancos = self.votos_brancos /self.total_eleitores
        return percentualBrancos

    #Calcula o percentual de votos nulos em relação ao total de eleitores
    def percentualNulos(self):
        percentualNulos = self.votos_nulos / self.total_eleitores
        return (percentualNulos)


# In[2]:


urna = Urna(1000, 800, 150, 50)


# In[3]:


print("Percentual de votos válidos em relação ao total de eleitores: ", "{:.0%}".format(urna.percentualValidos()))
print("Percentual de brancos em relação ao total de eleitores: ", "{:.0%}".format(urna.percentualBrancos()))
print("Percentual de votos nulos em relação ao total de eleitores: ", "{:.0%}".format(urna.percentualNulos()))


# In[ ]:





# In[ ]:




