class FlashCard:  
      
    # init method or constructor   
    def __init__(self, name, meaning):  
        self.name = name  
        self.meaning = meaning 
        
    def __str__ (self):
        return f'Name {self.name} | Meaning: {self.meaning}'

list = []

while True:
    
    print("Name")
    name = input()
    print("meaning")
    meaning = input()
    flash_card = FlashCard(name, meaning)  
    list.append(flash_card)
    
    print("Exit ? y | n")
    exit = input()
    
    if(exit == 'y'):
        break;
    

for flash in list: print(flash) 