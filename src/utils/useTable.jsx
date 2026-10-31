import { useState, useEffect } from 'react'
import { supabase } from './supabase.js'

function useTable(table) {
const [data, setData] = useState([])
const [error, setError] = useState("")
const [version, setVersion] = useState(0)

useEffect(() => {
    const load = async () => {
    const result = await supabase.from(table).select()
    if (result.error) {
        setError(result.error.message)
        return
    }
    setData(result.data)
    }
    load()
}, [table, version])

const reload = () => {
    setVersion(version + 1)
}

return { data, error, reload }
}

export default useTable
