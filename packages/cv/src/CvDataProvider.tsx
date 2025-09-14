import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useState,
    useEffect,
} from "react";
import {useGetCvData} from "../api/api";

// Пример типа данных CV (настрой под свои нужды)
export type CvData = {
    name?: string;
    email?: string;
    phone?: string;
    summary?: string;
    experience?: Array<{
        id: string;
        position: string;
        company: string;
        startDate: string;
        endDate?: string;
        description?: string;
    }>;
    education?: Array<{
        id: string;
        degree: string;
        institution: string;
        year: string;
    }>;
    // Добавь другие поля по необходимости: skills, languages и т.д.
};

// Тип контекста
type CvDataContextType = {
    cvData: CvData | null;
    isLoading: boolean;
    error: string | null;
    setCvData: (data: CvData) => void;
    updateCvData: (fields: Partial<CvData>) => void;
    refreshCvData: () => void; // например, для повторной загрузки с API
};

// Создаём контекст
const CvDataContext = createContext<CvDataContextType | undefined>(undefined);

// Провайдер
export const CvDataProvider = ({ children }: PropsWithChildren) => {
    const [cvData, setCvData] = useState<CvData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const {}=useGetCvData();

    // Имитация загрузки данных (например, с API)
    useEffect(() => {
        const fetchCvData = async () => {
            try {
                // Здесь может быть API-вызов, например:
                // const response = await fetch('/api/cv');
                // const data = await response.json();

                // Имитация задержки
                await new Promise((resolve) => setTimeout(resolve, 800));

                const mockData: CvData = {
                    name: "Иван Иванов",
                    email: "ivan@example.com",
                    phone: "+7 (999) 123-45-67",
                    summary: "Опытный разработчик с 5-летним стажем...",
                    experience: [
                        {
                            id: "1",
                            position: "Frontend Developer",
                            company: "TechCorp",
                            startDate: "2020-03-01",
                            endDate: "2023-06-30",
                            description: "Разработка веб-приложений на React.",
                        },
                    ],
                    education: [
                        {
                            id: "1",
                            degree: "Бакалавр информационных технологий",
                            institution: "МГУ",
                            year: "2020",
                        },
                    ],
                };

                setCvData(mockData);
                setError(null);
            } catch (err) {
                setError("Не удалось загрузить данные CV");
                setCvData(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCvData();
    }, []);

    // Обновление отдельных полей CV
    const updateCvData = (fields: Partial<CvData>) => {
        setCvData((prev) => (prev ? { ...prev, ...fields } : null));
    };

    // Метод для "обновления" данных (например, перезагрузка с сервера)
    const refreshCvData = () => {
        setIsLoading(true);
        // Здесь можно повторно вызвать fetchCvData
        // Пока просто симулируем обновление
        setTimeout(() => {
            setCvData((prev) => ({
                ...prev!,
                summary: `[Обновлено] ${prev?.summary}`,
            }));
            setIsLoading(false);
        }, 600);
    };

    return (
        <CvDataContext.Provider
            value={{
                cvData,
                isLoading,
                error,
                setCvData,
                updateCvData,
                refreshCvData,
            }}
        >
            {children}
        </CvDataContext.Provider>
    );
};

// Хук для удобного использования контекста
export const useCvData = (): CvDataContextType => {
    const context = useContext(CvDataContext);
    if (!context) {
        throw new Error("useCvData must be used within a CvDataProvider");
    }
    return context;
};
