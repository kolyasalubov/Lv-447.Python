#!/usr/bin/env python
# -*- coding: utf-8 -*-

__author__ = 'Stanislav Hrytcyshyn'

'''
Execute module
'''

import task178
import task554

def main():
    '''Execute all programs'''

    while True:
        user_choice = input('Choose task to execute: (178 / 554): ')

        if user_choice == '178':
            task178.main()
        elif user_choice == '554':
            task554.main()
        elif user_choice.lower() in ['q', 'quit', 'exit', 'stop', 'terminate']:
            break
        else:
            
            print('Please choose task from (178 / 554)')
            continue


if __name__ == '__main__':
    main()