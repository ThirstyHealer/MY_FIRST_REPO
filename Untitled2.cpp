#include <stdio.h>

int fibo(int num);
int main() {

    int n = 7;

    int fibonacci = fibo(n);
    printf("fib(%d) : %d", n, fibonacci);

    return 0;
}

int fibo(int n) {

    if (n == 0 || n == 1) 
        return n;
    else
        return fibo(n - 1) + fibo(n - 2);
}
