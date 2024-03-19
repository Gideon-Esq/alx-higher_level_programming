import sys

def infinite_add(args):
    total = 0
    for arg in args:
        total += int(arg)
    return total

if __name__ == "__main__":
    arguments = sys.argv[1:]

print(infinite_add(arguments))

