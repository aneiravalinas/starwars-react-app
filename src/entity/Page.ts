export interface Page<T> {
    count: number;
    previous: number | null;
    next: number | null;
    results: T[];
}