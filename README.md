# egen-fe-challenge
AngularJS Password Strength Calculator
This applications has a registeration page where user is asked to input Name,Username,Email,Password,and Gender.
When Password is entered the custom filter "filterPassword" calculates the strength of the password and displays the strength using a color code.
The Submit button the page enables only when the user provides valid inouts to all the fields on the page.

Following are the valid inputs with respect to each field:
1) Name:
Type: text
Required: Yes
Valid input:Name should contain letters only

2)Username:
Type=text
Required:Yes
Valid input: a) Username must start with a letter, and contains letters and numbers only. (No space or special characters are allowed)
             b) Username Must be between 5 and 20 characters. 

3)Email:
Type=text
Required:Yes
Valid input: a) Email should be in a valid format i.e eg:xyz@gmail.com

4)Password:
Type=Password
Required:Yes
Valid input: a) Passwords must be of atleast 8 characters.
             b) Must have Alphanumeric	characters. 
             a) One	Uppercase	character.
             b) One	Lowercase	character.
             d)One	Special	character

5) Password Strength indicator: It shows the strength of the password depending upon the characters entered by the user. It shows the password by using color codes
  Red indicates Very Low; Dark Yellow indicates Medium and High; Green indicates Highest Password strength.
  
6)Confirm Password:
Type=Password
Required:Yes
User neeeds to re-enter their their passsword and it verifies whether both the password match using Custom Directive "match"

7)Gender:
Type:radio button

8)I agree:
Type: checkbox
Required:Yes
Usedr is not able to submit until:
1)Until the user does not enter password having atleast Medium strength 
2)Until it provides valid input to all the fields
3)Until it checks the I Agree checkbox.
