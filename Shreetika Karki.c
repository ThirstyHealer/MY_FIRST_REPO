#include<stdio.h>
int main() {
	char ch;
	printf("Enter a character:");
	scanf("%c",&ch);
	if((ch>='A'&& ch<='Z')||(ch>='a'&&ch<='z'))
	{
		printf("The character'%c' is an alphabet.\n",ch);
		}else if (ch>='0' && ch<='9'){
			printf("The character'%c' is a  number.\n",ch);
		}
		else{
		printf("The character'%c' is a special character.\n",ch);
		}
	
	  return 0;

}

