#include <stdio.h>
#include <string.h>

int recognizePattern(char *str) {
    // Check if the first character is 'a'
    if (str[0] != 'a') {
        return 0;  // Pattern not matched
    }
    
    // Check if the second character is 'b'
    if (str[1] != 'b') {
        return 0;  // Pattern not matched
    }
    
    // After 'ab', there can be zero or more 'b's
    for (int i = 2; i < strlen(str); i++) {
        if (str[i] != 'b') {
            return 0;  // Pattern not matched
        }
    }
    
    return 1;  // Pattern matched
}

int main() {
    char str[100];
    
    printf("Enter a string: ");
    scanf("%s", str);
    
    if (recognizePattern(str)) {
        printf("The string matches the pattern 'abb*'.\n");
    } else {
        printf("The string does not match the pattern 'abb*'.\n");
    }
    
    return 0;
}

