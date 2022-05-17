import requests

def random_number_microservice(choices):
    return requests.post('http://127.0.0.1:8000/api', json={"numbers": choices}).json()["number"]

def remove_num(choices, num):
    try:
        choices.remove(num)
    except:
        pass

def prune_choices(board, choices, row, column):
    # along same column from top to current position
    for i in range(0, row):
        remove_num(choices, board[i][column])

    # along same row from right to current position
    for i in range(0, column):
        remove_num(choices, board[row][i])

    # 2nd row of blocks
    # 1st column
    if column % 3 == 0 and (row + 2) % 3 == 0:
        for i in range((column + 1), (column + 3)):
            remove_num(choices, board[row - 1][i])
    # 2nd column
    if (column + 2) % 3 == 0 and (row + 2) % 3 == 0:
        for i in range((column - 1), (column + 2)):
            if i == column:
                continue
            remove_num(choices, board[row - 1][i])
    # 3rd column
    if (column + 1) % 3 == 0 and (row + 2) % 3 == 0:
        for i in range((column - 2), column):
            remove_num(choices, board[row - 1][i])

    # 3rd row of blocks
    # 1st column
    if column % 3 == 0 and (row + 1) % 3 == 0:
        for i in range((row - 2), row):
            for j in range((column + 1), (column + 3)):
                remove_num(choices, board[i][j])

    # 2nd column
    if (column + 2) % 3 == 0 and (row + 1) % 3 == 0:
        for i in range((row - 2), row):
            for j in range((column - 1), (column + 2)):
                if j == column:
                    continue
                remove_num(choices, board[i][j])

    # 3rd column
    if (column + 1) % 3 == 0 and (row + 1) % 3 == 0:
        for i in range((row - 2), row):
            for j in range((column - 2), column):
                remove_num(choices, board[i][j])

    return choices

def generate_board():
    board = [[0 for i in range(9)] for j in range(9)]
    choices_for_spaces = dict()
    for i in range(81):
        choices_for_spaces[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    space = 0
    return make_choice(board, choices_for_spaces, space)

def make_choice(board, choices_for_spaces, space):
    if space ==  81:
        return board

    row = space // 9
    column = space % 9

    choices_for_spaces[space] = prune_choices(board, choices_for_spaces[space], row, column)

    if choices_for_spaces[space] == []:
        remove_row = (space - 1) // 9
        remove_column = (space - 1) % 9
        remove_choice = board[remove_row][remove_column]
        board[remove_row][remove_column] = 0
        choices_for_spaces[space] = [1,2,3,4,5,6,7,8,9]
        remove_num(choices_for_spaces[space - 1], remove_choice)
        return make_choice(board, choices_for_spaces, space-1)

    elif len(choices_for_spaces[space]) == 1:
        choice = choices_for_spaces[space][0]
    else:
        choice = random_number_microservice(choices_for_spaces[space])

    board[row][column] = choice

    return make_choice(board, choices_for_spaces, space+1)

if __name__ == "__main__":
    pass








