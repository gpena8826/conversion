import { Container, Grid, Input, Select, Text } from "@mantine/core"
import React, { useEffect, useState } from "react"

export default function Home() {
    const [inputValue, setInputValue] = useState("")
    const [selectedValue, setSelectedValue] = useState("binary")
    const [binaryValue, setBinaryValue] = useState("")
    const [decimalValue, setDecimalValue] = useState("")
    const [hexadecimalValue, setHexaDecimalValue] = useState("")
    const [octalValue, setOctalValue] = useState("")
    const handleConversion = () => {
        if (selectedValue === "binary") {
            setDecimalValue(parseInt(inputValue, 2).toString())
            setHexaDecimalValue(parseInt(inputValue, 2).toString(16))
            setOctalValue(parseInt(inputValue, 2).toString(8))
        } else if (selectedValue === "decimal") {
            setBinaryValue(parseInt(inputValue, 10).toString(2))
            setHexaDecimalValue(parseInt(inputValue, 10).toString(16))
            setOctalValue(parseInt(inputValue, 10).toString(8))
        } else if (selectedValue === "hexadecimal") {
            setBinaryValue(parseInt(inputValue, 16).toString(2))
            setDecimalValue(parseInt(inputValue, 16).toString(10))
            setOctalValue(parseInt(inputValue, 16).toString(8))
        } else if (selectedValue === "octal") {
            setBinaryValue(parseInt(inputValue, 8).toString(2))
            setDecimalValue(parseInt(inputValue, 8).toString(10))
            setHexaDecimalValue(parseInt(inputValue, 8).toString(16))
        }
    }
    useEffect(() => {
        document.title = "Conversion"
        handleConversion()
    }, [inputValue, selectedValue])
    return (
        <>
            <Container size="sm">
                <Grid justify="center" pt="lg">
                    <Grid.Col span={4}>
                        <Text fz="md" ta="right">
                            Select numbering system
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Select
                            data={[
                                { value: "binary", label: "Binary" },
                                { value: "decimal", label: "Decimal" },
                                { value: "hexadecimal", label: "Hexadecimal" },
                                { value: "octal", label: "Octal" },
                            ]}
                            value={selectedValue}
                            onChange={(value) => setSelectedValue(value!)}
                        />
                    </Grid.Col>
                </Grid>
                <Grid justify="center">
                    <Grid.Col span={4}>
                        <Text fz="md" ta="right">
                            Enter Value
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Input
                            placeholder="Enter Value"
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </Grid.Col>
                </Grid>
                <Grid justify="center">
                    <Grid.Col offset={4}>
                        <h3>
                            <b>Results:</b>
                        </h3>
                        {inputValue.length > 0 ? (
                            <div>
                                {selectedValue != "binary" && (
                                    <p>
                                        <b>Binary</b>: {binaryValue}
                                    </p>
                                )}
                                {selectedValue != "decimal" && (
                                    <p>
                                        <b>Decimal</b>: {decimalValue}
                                    </p>
                                )}
                                {selectedValue != "hexadecimal" && (
                                    <p>
                                        <b>Hexadecimal</b>: {hexadecimalValue}
                                    </p>
                                )}
                                {selectedValue != "octal" && (
                                    <p>
                                        <b>Octal</b>: {octalValue}
                                    </p>
                                )}
                            </div>
                        ) : null}
                    </Grid.Col>
                </Grid>
                <br />
            </Container>
        </>
    )
}
