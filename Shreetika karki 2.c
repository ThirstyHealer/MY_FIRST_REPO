#include<stdio.h>
void transpose(int a[10][10], int row,int col){
	int i,j;
	printf("\n Transpose of the matrix:\n");
	for(i=0; i<col; i++) {
		for(j=0; j<row; j++){
			printf("%d",a[j][i]);
		}
		printf("\n");
	
	}
}
int main()
{
int a[10][10],row,col,i,j;
printf("Enter rows and columns of matrix:");
scanf("%d%d", &row, &col);
printf("Enter elements of matrix:\n");
for(i=0; i<row; i++){
	for(j=0;j<col; j++){
		scanf("%d", &a[i][j]);
		
	}
}
transpose(a, row, col);
return 0;
}
