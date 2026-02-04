CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
BEGIN
    IF N < 1 THEN
        Salary := NULL;
        RETURN NEXT;
        RETURN;
    END IF;

    RETURN QUERY (
        SELECT Employee.salary
        FROM Employee
        GROUP BY Employee.salary
        ORDER BY Employee.salary DESC
        LIMIT 1 OFFSET N-1
    );
END;
$$ LANGUAGE plpgsql;