using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace vacation.Logic.Helper
{
    public static class Helper
    {
        public static String ErrorPage = "~/Views/Shared/Error.cshtml";

        public static string toStringNull(this string val)
        {
            if (val == null)
            {
                return "";
            }
            else
            {
                return val;
            }

        }

        public static decimal divideDecimal(this decimal val, decimal div)
        {
            decimal result = 0;

            if (div != 0)
                result = val / div;
            else
                result = 0;

            return result;
        }

        public static decimal divideInt(this int val, int div)
        {
            decimal result = 0;

            if (div != 0)
                result = (decimal)val / div;
            else
                result = 0;

            return result;
        }

        public static decimal divideInt(this int val, decimal div)
        {
            decimal result = 0;

            if (div != 0)
                result = val / div;
            else
                result = 0;

            return result;
        }

        public static string ToPctBlank(this string val, bool check)
        {

            if (val.Trim().Equals("0%") && !check)
                return " ";
            else
                return val;

        }

        public static decimal ToDecimalZero(this string val)
        {
            decimal returnValue = 0;
            Decimal.TryParse(val, out returnValue);
            return returnValue;
        }

        public static int ToIntZero(this string val)
        {
            int returnValue = 0;
            Int32.TryParse(val, out returnValue);
            return returnValue;
        }

        public static DataTable ToDataTable<T>(this IList<T> data)
        {
            PropertyDescriptorCollection properties =
                TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
            foreach (PropertyDescriptor prop in properties)
                table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
            foreach (T item in data)
            {
                DataRow row = table.NewRow();
                foreach (PropertyDescriptor prop in properties)
                    row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
                table.Rows.Add(row);
            }

            return table;

        }

        public static SqlParameter ToSqlDataTableParameter<T>(this IList<T> data, String ParameterName, String UserDefTableTypeName)
        {
            PropertyDescriptorCollection properties =
       TypeDescriptor.GetProperties(typeof(T));
            DataTable table = new DataTable();
            foreach (PropertyDescriptor prop in properties)
                table.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
            foreach (T item in data)
            {
                DataRow row = table.NewRow();
                foreach (PropertyDescriptor prop in properties)
                    row[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
                table.Rows.Add(row);
            }

            var warnings = new SqlParameter(ParameterName, SqlDbType.Structured);//Nombre del parametro
            warnings.Value = table;
            warnings.TypeName = UserDefTableTypeName;//Nombre del objeto datatabletype de la base de datos

            return warnings;

        }

        public static SqlParameter ToSqlParameter(this string val, String parameterName)
        {
            String value = val;

            if (value == null)
                value = "";

            var param = new SqlParameter("@" + parameterName, value);

            return param;

        }

        public static SqlParameter ToSqlParameter(this byte[] val, String parameterName)
        {
            SqlParameter param = null;

            if (val == null)
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.VarBinary,
                    Value = DBNull.Value

                };

            }
            else
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.VarBinary,
                    Value = val

                };
            }

            return param;

        }

        public static SqlParameter ToSqlParameterId(this string val, String parameterName)
        {


            SqlParameter param = null;

            if (val == null)
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.NVarChar,
                    Value = DBNull.Value

                };

            }
            else if (val.Equals(" "))
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.NVarChar,
                    Value = DBNull.Value

                };
            }
            else
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.NVarChar,
                    Value = val

                };
            }

            return param;

        }

        public static SqlParameter ToSqlParameter(this int val, String parameterName)
        {

            var param = new SqlParameter("@" + parameterName, val);

            return param;

        }

        public static SqlParameter ToSqlParameter(this int? val, String parameterName)
        {


            SqlParameter param = null;

            if (val != null)
            {

                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.Int,
                    Value = val

                };

            }
            else
            {

                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.Int,
                    Value = DBNull.Value

                };

            }

            return param;

        }

        public static SqlParameter ToSqlParameterId(this int? val, String parameterName)
        {


            SqlParameter param = null;

            if (val == null || val <= 0)
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.Int,
                    Value = DBNull.Value

                };
            }
            else
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.Int,
                    Value = val

                };
            }

            return param;

        }

        public static SqlParameter ToSqlParameterId(this int val, String parameterName)
        {


            SqlParameter param = null;

            if (val <= 0)
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.Int,
                    Value = DBNull.Value

                };
            }
            else
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.Int,
                    Value = val

                };
            }

            return param;

        }

        public static SqlParameter ToSqlParameter(this bool val, String parameterName)
        {

            var param = new SqlParameter("@" + parameterName, val);

            return param;

        }

        public static SqlParameter ToSqlParameter(this bool? val, String parameterName)
        {


            SqlParameter param = null;

            if (val == null)
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.Bit,
                    Value = DBNull.Value

                };
            }
            else
            {
                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.Bit,
                    Value = val

                };
            }

            return param;

        }

        public static SqlParameter ToSqlParameter(this DateTime val, String parameterName)
        {

            var param = new SqlParameter("@" + parameterName, val);

            return param;

        }

        public static SqlParameter ToSqlParameter(this DateTime? val, String parameterName)
        {

            SqlParameter param = null;

            if (val != null)
            {

                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.DateTime,
                    Value = val

                };

            }
            else
            {

                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.DateTime,
                    Value = DBNull.Value

                };

            }

            return param;

        }

        public static SqlParameter ToSqlParameter(this decimal? val, String parameterName)
        {

            SqlParameter param = null;

            if (val != null)
            {

                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.Decimal,
                    Value = val

                };

            }
            else
            {

                param = new SqlParameter()
                {
                    ParameterName = "@" + parameterName,
                    SqlDbType = SqlDbType.Decimal,
                    Value = DBNull.Value

                };

            }

            return param;

        }

        public static SqlParameter ToSqlParameter(this decimal val, String parameterName)
        {

            var param = new SqlParameter("@" + parameterName, val);

            return param;

        }
    }
}
