import numpy as np

class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        reflection_matrix = np.eye(len(matrix))[::-1].astype(int)
        
        arr = np.array(matrix)
        result = arr.T @ reflection_matrix
        
        matrix[:] = result.tolist()
