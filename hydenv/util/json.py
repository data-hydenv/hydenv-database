import decimal
import datetime


def sqlencoder(data):
    if isinstance(data, datetime.date):
        return data.isoformat()
    if isinstance(data, decimal.Decimal):
        return float(data)
    return data