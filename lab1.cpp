#include <stdio.h> 
#include <ctype.h> 
#include <string.h> 
int main() { 
char identifier[100]; 
printf("Enter an identifier: "); 
fgets(identifier, sizeof(identifier), stdin); 
identifier[strcspn(identifier, "\n")] = '\0'; 
int valid = 1; 
size_t length = strlen(identifier); 
if (length == 0) { 
valid = 0; 
} else { 
if (!(isalpha(identifier[0]) || identifier[0] == '_')) { 
valid = 0;
  } else { 
            for (size_t i = 1; i < length; i++) { 
                if (!(isalnum(identifier[i]) || identifier[i] == '_')) { 
                    valid = 0; 
                    break; 
                } 
            } 
        } 
    } 
    printf(valid ? "Valid identifier.\n" : "Invalid identifier.\n"); 
    return 0;
}
