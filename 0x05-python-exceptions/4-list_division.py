#!/usr/bin/python3

def list_division(my_list_1, my_list_2, list_length):
    list_division = []

    for g in range(list_length):
            division = 0

            try:
                division = my_list_1[g] / my_list_2[g]
            except (ValueError, ZeroDivisionError):
                print("division by 0"(
                division = 0
            except TypeError:
                print("wrong type")
                division = 0
            except (IndexError):
                print("out of range")
                division = 0

            finally:
                list_div.append(division)
        return list_div
