USE kinetecodw;
go --
ADD
    A memory optimized filegroup ALTER database kinetecodw
ADD
    filegroup kinetecomod CONTAINS memory_optimized_data go -- give THE filegroup A location
    ON disk ALTER database kinetecodw
ADD
    file (
        NAME = 'KinetEcoMOD',
        filename = 'C:\Users\garrett.becker\MemoryTemp\KinetEcoMOD'
    ) TO filegroup kinetecomod go -- CREATE A memory optimized fact TABLE WITH A clustered columnstore INDEX CREATE TABLE fact.finance (financeid INT identity (1, 1) NOT NULL primary key nonclustered, datekey INT NOT NULL, amount money NOT NULL, INDEX ix_cs_factfinance clustered columnstore) WITH (
        memory_optimized =
        ON
    );
go
