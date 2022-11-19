import smtplib 

def send_conf_mail(email):
    try:
        server = smtplib.SMTP('smtp.gmail.com:587')
        server.starttls()
        server.login("email", "password")
        msg = 'Subject: {}\n\n{}'.format("Registration Successful", 'Your account to access Cardio Care has been successfully created')
        server.sendmail("email", email, msg)
        server.quit()
        print ("Email sent successfully!") 
    except Exception as ex:
        print("Something went wrong....", ex)




# def send_conf_mail(registered_user_mail):
#     try: 
#         #Create your SMTP session 
#         smtp = smtplib.SMTP('smtp.gmail.com', 587) 

#     #Use TLS to add security 
#         smtp.starttls() 

#         #User Authentication 
#         smtp.login("your email","password")

#         #Defining The Message 
#         message = 'Subject: {}\n\n{}'.format("Registration Successful", 'Your account to access Cardio Care has been successfully created')

#         #Sending the Email
#         smtp.sendmail("your email", registered_user_mail, message) 

#         #Terminating the session 
#         smtp.quit() 
#         print ("Email sent successfully!") 

#     except Exception as ex: 
#         print("Something went wrong....",ex)