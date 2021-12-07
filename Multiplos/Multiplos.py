#!/usr/bin/env python
# coding: utf-8

# In[34]:


def somaMultiplos(x):
    #Declara e inicia uma lista vazia
    multiplos=[]
    #Itera uma lista de 0 até X
    for numero in range(x):
        '''Para cada número da lista, se módulo 3 ou 5 desse número for 0,
           acrescenta-o na lista
        '''
        if numero%3 == 0:
            multiplos.append(numero)
        elif numero%5 == 0:
            multiplos.append(numero)
    return sum(multiplos)


# In[37]:


somaMultiplus = somaMultiplos(10)


# In[38]:


print(somaMultiplus)


# In[ ]:




