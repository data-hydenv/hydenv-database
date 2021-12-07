export interface SqlResult {
    message: string;
    params: {[key: string]: any};
    data: {[key: string]: any}[];
    error?: boolean;
    perf?: {
        backendTime?: number;
        executionTime?: number;
    };
    explain?: string | any;
}
