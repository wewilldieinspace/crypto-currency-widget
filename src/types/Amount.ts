export interface MinimalAmount {
    minAmount: number
}

export interface EstimatedAmount {
    estimatedAmount: number,
    transactionSpeedForecast: string,
    warningMessage: null
}