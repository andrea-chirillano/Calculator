def calculate_operation(operation):
    operators = "+-*/"
    numbers = "0123456789"
    
    current_number = ""
    results = []
    last_character = None
    
    for char in operation:
        if char in operators:
            if current_number:
                results.append(float(current_number))
                current_number = ""
            if char == "+" and last_character != "+":
                results.append(char)
            elif char != "+" and last_character != "+" and last_character != None:
                results.append(char)
        elif char in numbers:
            current_number += char
        elif char == ".":
            current_number += char
        
        last_character = char
    
    if current_number:
        results.append(float(current_number))
    
    current_result = results[0]
    for i in range(1, len(results), 2):
        operator = results[i]
        number = results[i + 1]
        
        if operator == "+":
            current_result += number
        elif operator == "-":
            current_result -= number
        elif operator == "*":
            current_result *= number
        elif operator == "/":
            current_result /= number
    
    return current_result

operation = "5+3*2-10/2"
result = calculate_operation(operation)
print(f"Result of '{operation}': {result}")
