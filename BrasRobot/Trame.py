 #librairie
 #-*- coding: utf-8 -*
import sys
import serial
import time
import RPi.GPIO as GPIO


#a = sys.argv[1]
#b = sys.argv[2]
#c = sys.argv[3]
#d = sys.argv[4]
#e = sys.argv[5]
#f = sys.argv[6]
#print("coucou")

GPIO.setmode(GPIO.BCM)

GPIO.setwarnings (False)
led =18

#GPIO.setup(led, GPIO.OUT)# numérotation du circuit 

# timeout=3.0 le programme redemarre toutes les 3s 
#/dev/ttyAMA0 port Linux 

port = serial.Serial("/dev/ttyAMA0", baudrate=9600)
#z = 0

#while 1:
         # Allume la LED   
#GPIO.output(led, 1)
        # delay 
#time.sleep(1)
        # eteind la LED 
#GPIO.output(led, 0)
        # Récupération data 
        
        # m2= subprocess.call("/var/www/html/m2ras.php")
        
        #port.write(str.encode("-1/0/12/"+a+"/"+b+"/"+c+"/"+d+"/"e+"/"+f+"/0/0/-2/"))
       
port.write(str.encode("-1/0/12/"+"100"+"/"+"100"+"/"+"34"+"/"+"10"+"/"+"0"+"/"+"100"+"/0/0/-2/"))
            
        # vers port série
      
        
  

print("test")    #Probleme dans le port et le GPIO.setup a verifier
        
#time.sleep(1)
GPIO.cleanup()


        





            
        

                
        

                                
                
