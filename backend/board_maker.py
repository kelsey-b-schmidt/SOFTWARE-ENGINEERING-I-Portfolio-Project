import requests
import random

def random_number_microservice(numbers):
    return requests.post('http://127.0.0.1:8000/api', json={"numbers": numbers}).json()["number"]

def remove_num(choices, num):
    try:
        choices.remove(num)
    except:
        pass

def board_maker():
    start_over = 0
    choices = []
    while choices == []:
        board = [[0 for i in range(9)] for j in range(9)]
        row = 0
        for i in range(9):
            column = 0
            for j in range(9):
                choices = [1, 2, 3, 4, 5, 6, 7, 8, 9]
                # along same column from top to current position
                for k in range(0,row):
                    remove_num(choices, board[k][column])

                # along same row from right to current position
                for k in range(0,column):
                    remove_num(choices, board[row][k])

                # 2nd row of blocks
                # 1st column
                if column % 3 == 0 and (row+2) % 3 == 0:
                    for k in range((column+1), (column+3)):
                        remove_num(choices, board[row-1][k])
                # 2nd column
                if (column+2) % 3 == 0 and (row+2) % 3 == 0:
                    for k in range((column-1), (column+2)):
                        if k == column:
                            continue
                        remove_num(choices, board[row-1][k])
                # 3rd column
                if (column+1) % 3 == 0 and (row+2) % 3 == 0:
                    for k in range((column-2), column):
                        remove_num(choices, board[row-1][k])

                #3rd row of blocks
                # 1st column
                if column % 3 == 0 and (row+1) % 3 == 0:
                    for k in range((row-2), row):
                        for l in range((column+1), (column+3)):
                            remove_num(choices, board[k][l])

                # 2nd column
                if (column+2) % 3 == 0 and (row+1) % 3 == 0:
                    for k in range((row - 2), row):
                        for l in range((column-1), (column+2)):
                            if l == column:
                                continue
                            remove_num(choices, board[k][l])

                # 3rd column
                if (column+1) % 3 == 0 and (row+1) % 3 == 0:
                    for k in range((row-2), row):
                        for l in range((column-2), column):
                            remove_num(choices, board[k][l])

                if choices == []:
                    start_over += 1
                    break
                elif len(choices) == 1:
                    board[row][column] = choices[0]
                else:
                    number = random.choice(choices)
                    board[row][column] = number
                column += 1
            if choices == []:
                break
            row += 1

    print(start_over)
    return board

if __name__ == "__main__":
    #choices = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    #for i in range(10000):
    #    number = random_number_microservice(choices)  # call microservice for random number
    print(board_maker())
