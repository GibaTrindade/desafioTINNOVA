#!/usr/bin/env python
# coding: utf-8

# In[12]:


def bubbleSort(listaDesordenada):
    for numero in range(len(listaDesordenada)-1,0,-1):
        for i in range(numero):
            if listaDesordenada[i]>listaDesordenada[i+1]:
                listaDesordenada[i], listaDesordenada[i+1] = listaDesordenada[i+1],  listaDesordenada[i]


# In[13]:


listaDesordenada = [5, 3, 2, 4, 7, 1, 0, 6]
bubbleSort(listaDesordenada)
print(listaDesordenada)


# In[ ]:




