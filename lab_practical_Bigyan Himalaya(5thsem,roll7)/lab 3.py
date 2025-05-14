def gcd(a, b):
    """GCD"""
    while b != 0:
        a, b = b, a % b
    return a

def is_primitive_root(root, p):
    """Check if a number is a primitive root modulo p"""
    required_set = set(range(1, p))
    values = set()
    for i in range(1, p):
        values.add(pow(root, i, p))
    return values == required_set

def find_primitive_roots(p):
    """Find all primitive roots modulo p"""
    primitive_roots = []
    for num in range(2, p):
        if gcd(num, p) == 1 and is_primitive_root(num, p):
            primitive_roots.append(num)
    return primitive_roots

if __name__ == "__main__":
    number = int(input("Enter a number (prime number): "))
    primitive_roots = find_primitive_roots(number)
    if primitive_roots:
        print(f"Primitive roots modulo {number}: {primitive_roots}")
    else:
        print(f"No primitive roots found for {number}")