import numpy as np

class Solution:
    rotation_matrix = np.array([[0, -1], [-1, 0]])

    def rotate(self, matrix: List[List[int]]) -> None:
        reflection_matrix = np.eye(len(matrix))[::-1].astype(int)
        
        arr = np.array(matrix)
        result = arr.T @ reflection_matrix
        
        matrix[:] = result.tolist()
