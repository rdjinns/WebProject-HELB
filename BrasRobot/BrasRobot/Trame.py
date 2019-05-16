 #librairie
 #-*- coding: utf-8 -*
import sys
import serial
import time
import RPi.GPIO as GPIO


a = str(sys.argv[1])
b = str(sys.argv[2])
c = str(sys.argv[3])
d = str(sys.argv[4])
e = str(sys.argv[5])
f = str(sys.argv[6])


port = serial.Serial("/dev/ttyAMA0", baudrate=9600)
print(a)


port.write(str.encode("-1/0/12/"+str(a)+"/"+str(b)+"/"+str(c)+"/"+str(d)+"/"+str(e)+"/"+str(f)+"/0/0/-2/"))
print("Chien")       



        





            
        

                
        

                                
                
