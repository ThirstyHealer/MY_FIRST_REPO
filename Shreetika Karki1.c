#include<stdio.h>
#include<string.h>
struct Part{
	int part_no;
	char part_name[50];
	int stock_quantity;
	float rate;
	int reorder_level;
};
int main(){
	struct Part p[3];
	int i;
	for(i=0; i<3; i++){
		printf("\n Enter details for part%d:\n",i+1);
		printf("Part Number:");
	    scanf("%d", &p[i].part_no);
		printf("Part Name:");
		scanf("%[\n]", &p[i].part_name);
		printf("Stock Quantity:");
		 scanf("%d", &p[i].stock_quantity);
		 printf("Rate:");
		 scanf("%f", &p[i].rate);
		 printf("Re-order Level:");
		 	 scanf("%d", &p[i].reorder_level);
		 }
		 printf("\n Stored Part Records:\n");
		 for(i=0; i<3; i++){
		 	printf("\nPart %d:\n",i+1);
		 	printf("Part No.%d\n",p[i].part_no);
		 	printf("Part Number: %s\n",p[i].part_name);
		 		printf("Stock Quantity: %\n, p[i].stock_quantity");
		         printf("Rate: %.2f\n",p[i].rate);
		   printf("Reorder Level: %d\n,p[i].reorder_level");
		  
	}
	return 0;
}
